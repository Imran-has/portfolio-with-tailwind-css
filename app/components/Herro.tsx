import Image from"next/image"
import pexelsImage from"../public/pexelsimage.jpg";
import pexelswebsite from"../public/pexelswebsite.jpg";
import pexelsso from"../public/pexelsso.jpg";
import pexelsgraphics from"../public/pexelsgraphics.jpg";
const Hero = () => {
    return (
  
  <div className=' '>
        <section className="items-center">
          <h1 className="bg-gray-200 h-screen flex items-center justify-center text-6xl p-3 m-4"> Welcome to my Portfolio</h1><br/>
          <p className="text-center text-lg"> I want to show you my recent work project !</p>
          <div className="flex items-center justify-center h-screen">
          <Image src={pexelsImage} alt="setching Image" width={800} height={700} className="flex-col-3"></Image>
         
          </div>
         

        </section>
        <div>

<h1 className="text-6xl text-center"> About me</h1>
<p className="text-center text-lg">" Hello my name is imran hassan a front-end developer passionate about creating dyanmic and user friendly website<br/>
using next React,Next js,and  tailwind css also working  as a warehouse assistan department of record management  <br/>logistics company almost 4 yaear experience  knowing indexing ,scanning ,inventory management"   </p>
</div>
        <div>
          <h1 className="text-6xl text-center p-10 ">Skills</h1>
          <ul>
            <li className="text-lg text-center p-6 ">Webiste developer</li>
            <li className="text-lg text-center p-6">Graphics Designing</li>
            <li className="text-lg text-center p-6 ">SEO</li>
            <li  className="text-lg text-center p-6 ">Wordpress website developer</li>
            <li  className="text-lg text-center p-6 ">Data entery expert</li>
            <li  className="text-lg text-center p-6 ">Freelancer</li>
          </ul>
        </div>
        <div >
        <h1  className="text-6xl text-center p-6 "> E<span className="text-rose-600">X</span>perience</h1>
          <h1  className="text-lg text-center p-6 text-rose-600 "> wordpress Webiste</h1>
          <p className="text-lg text-center p-6"> created  my own wordpress website almost working 3 year experience </p>
          <h2  className="text-lg text-center p-6 ">Graphics Designing</h2>
          <p  className="text-lg text-center p-6 ">  I have experience  in Graphic Designing 3 yaear experience expert in adobe photoshop </p>
        </div>
        <div className=" text -center">
          <h1 className="text-rose-600  text-lg text-center p-4  font-bold">Website Developer</h1>
        <div className="flex items-center justify-center h-screen">
        <Image src={pexelswebsite} alt="website developer" width={800} height={700} className="flex-col-3"></Image>
      

        </div>
        </div>
        <div className=" flex items-center justify-center h-screen">

        
        <div>
        <Image src={pexelsso} alt="seo image" width={800} height={700} className="flex-col-3"></Image>

        
        <h1 className="text-rose-600  text-lg text-center p-4  font-bold"> Search engin optimization</h1>
        
        </div>
  
         
        
        </div>

        <div className=" flex items-center justify-center h-screen p-5">

        
        <div className=" p-10 m-5">
        <Image src={pexelsgraphics} alt="Graphics desining" width={500} height={400} className="flex-col-3"></Image>

        
        <h1 className="text-rose-600  text-lg text-center p-4  font-bold"> Graphics Designing</h1>
        
        </div>
  
         
        
        </div>


       
        </div>
        
    )
  }
  
  export default Hero
  