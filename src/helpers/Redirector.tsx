import { useEffect } from "react"

// this is a component to incrase security of pages
const Redirector = () => {

    useEffect(() => {
        window.location.href = '/'
    }, [])

  return (
    <div className="flex justify-center items-center h-screen">
        Redirecting. . . 
    </div>
  )
}

export default Redirector