import Image from "next/image";

var data=[ "Mango" ,"Apple" , "Banana" , "Orange" , "pineapple" ]


export default function Home() {
  return (
    <div>
        <ol>
          {data.map((fruit)=>(
           <li key={fruit}>{fruit}</li>)
          )}
        </ol>
        
    </div>
  );
}
