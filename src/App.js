import imageInSrc from './image-src.jpg' 
import './App.css';
import './style.css'

function App() {
  return (
     <div>
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

      <h1 className="title red">Skander Benzarti</h1>

      <br />

        <img src={imageInSrc } width="100%"/>

          <br />

            <img src="/profil.jpg" />

</div>

   
<video width="320" height="240" controls >
<source src="/Videos/Beach.mp4" type="video/mp4"/>
</video>


</div> 
  );
}

export default App;
