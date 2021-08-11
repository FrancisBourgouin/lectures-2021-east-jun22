import "./Loading.css"
export default function Loading(props) {
  const { active } = props;
  return (
    <>
      {active &&
        <div className="bg">

          <div className="loading">
            <p>loading with chips</p>
            <video src="/loading.mp4" muted autoPlay loop />
          </div>
        </div>
      }
    </>
  )
}