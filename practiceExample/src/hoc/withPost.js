import { useState, useEffect } from "react"
const withPost = (WrappedComponent, fetchPosts) => {
    return function (props) {
        const [data, setData] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        const [error, setError] = useState(false)

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await fetchPosts()
                    setData(data)
                    setIsLoading(false)

                } catch (err) {
                    setError(err)
                    setIsLoading(false)
                }
            }
            fetchData()
        }, [])

        return (<>
            <WrappedComponent {...props} data={data} isLoading={isLoading} error={error} ></WrappedComponent>
        </>)
    }
}

export default withPost