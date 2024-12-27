

const Home = () => {
    let display_data = JSON.parse(localStorage.getItem("display"));
    
  return (
    <>
      <h1>Home page</h1>
      <h2>username: {display_data.username}</h2>
      <h2>email: {display_data.email}</h2>
    </>
  )
}

export default Home
