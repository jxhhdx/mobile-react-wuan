import { useDispatch, useSelector } from 'react-redux'


const useCounter = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const testAction = () => dispatch({ type: 'TEST', test: state.test.test + 1 })
    return { state, testAction }
}
function Redux() {
    const { state, testAction } = useCounter()
    return (
        <div>
            <p>{JSON.stringify(state, null, 4)}</p>
            <button onClick={testAction}>点击</button>
        </div>
    )
}

export default Redux