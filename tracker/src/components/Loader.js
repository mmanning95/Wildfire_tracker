import fire_loading from "./fire_loading.gif"


export const Loader = () => {
  return (
    <div className="loader">
        <img src={fire_loading} alt="Loading" />
        <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader