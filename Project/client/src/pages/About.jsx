import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error sequi facilis sit illo excepturi dolor ad, harum quae aut iure impedit cum commodi velit omnis, sunt corporis?
             Animi iste dignissimos maxime possimus fugit facilis, totam nesciunt impedit sed, recusandae quas numquam aspernatur id mollitia, fuga in est doloribus accusantium quia molestias. 
            Pariatur provident ipsum possimus quisquam veritatis minus necessitatibus, tenetur adipisci omnis similique facere laudantium nam inventore dolorum aspernatur unde et laboriosam cumque consequuntur!
            Ipsum voluptates nemo architecto et.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          In eligendi illo similique molestiae assumenda fugit amet iste voluptates, soluta tempora vitae labore incidunt impedit consequatur eius iusto ad quia perspiciatis aspernatur consectetur rem repudiandae nihil sint possimus? 
          Officiis enim praesentium ipsam nihil cum cupiditate non laudantium repudiandae doloribus ipsa earum quibusdam incidunt tempore fuga iure molestiae consequatur quidem, eius assumenda. Optio architecto asperiores accusantium vitae. 
          Consequatur, illum id! 
          Impedit obcaecati quam quos ipsam hic enim id, assumenda veniam officiis tempore nesciunt optio repellendus, fugit facilis eos suscipit perspiciatis! Distinctio consequatur atque unde possimus commodi neque sequi necessitatibus ad nesciunt pariatur?
        </p>
      </div>
    </div>
  );
};

export default About;
