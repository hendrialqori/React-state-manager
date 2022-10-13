import { memo, useEffect, useMemo, useRef } from 'react'
import { Provider } from "react-redux"
import { store } from "./store/store"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./store"
import { useSelector } from "react-redux"
import type { State } from "./store"

const Redux = ():JSX.Element => {
 return (
    <section>
        <BalanceComponent />
        <ReduxChildComponent />
        <UsersComponent />
    </section>
 )
}

const BalanceComponent = () => {
    const { balance } =
        useSelector((state: State) => state.bank)
  return (
    <h1>{balance}</h1>
  )
}

const UsersComponent = ():JSX.Element => {
    const dispatch = useDispatch()
    
    const { users } =
         useSelector((state: State) => state.bank)

    const { getUsers } = 
         bindActionCreators(actionCreators, dispatch)
         
    const renderCounter  = useRef(0);
    renderCounter.current = renderCounter.current + 1;
    console.log("renders user component")
    heavyProcess(1000)

    useEffect(()=> {
        getUsers()
    }, [])

    return (
        <table>
            <p>renders {renderCounter.current} time</p>
            <tr>
                <th>Name</th>
            </tr>
            {users.map((user, i) => (
                <tr key={i}>
                    <td>{user.name}</td>
                </tr>
            ))}
        </table>
    )
}

const heavyProcess = (count: number) => {
    for(let i = 0; i < count; i++ ) {
        console.log(i)
    }
}

const ReduxChildComponent = memo(() => {

    console.log('Renders!')

    const dispatch = useDispatch()
    const { depositMoney } = bindActionCreators(actionCreators, dispatch)

    useEffect(()=> {
        console.log("redux child render") 
    },[])

    return (
        <section>
            <h1 >Children component</h1>
            <button onClick={() => depositMoney(100)}>Deposit</button>
        </section>
    )
})

const ReduxComponent = () => {
    return (
        <Provider store={store}>
            <Redux />
        </Provider>
    )
}

export default ReduxComponent