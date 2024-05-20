import loader from "../assets/loader.svg";
const Loader = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
        }}
        src={loader}
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
