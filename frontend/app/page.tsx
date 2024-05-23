
import EventCategories from "@/components/Categories";
import Hero from "@/components/Hero";
import EventRecomendation from "@/components/Recomendation";
 

export default function Home() {
  return (
    <>
     <Hero />
     <EventCategories />
     <h2 className="text-2xl font-semibold mb-6 text-center mt-10">Recommended Events For You</h2>
     <EventRecomendation />
    
    </>
   );
}
