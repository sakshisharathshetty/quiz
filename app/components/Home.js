const Home = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.course}</h1>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our demo application.</p>
    </div>
  );
};

export default Home;