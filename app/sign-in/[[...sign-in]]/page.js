import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
    <>
    <div>
      <img src="/ban1.jpg" width={900} height={1000} className="object-contain h-full w-full"/>
      <div className=" absolute top-20 right-10">
      <SignIn path="/sign-in" />
      </div>
       
    </div>
    
    
    </>
    
    
  ) 
}