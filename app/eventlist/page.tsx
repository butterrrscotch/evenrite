
import EventCategories from "@/components/Categories";
import Hero from "@/components/Hero";
import EventRecomendation from "@/components/Recomendation";
 

export default function eventlist() {
  return (
    <>
    <h2 className="text-2xl font-semibold mb-6 text-center mt-10">Choose Your Category</h2>
     <EventCategories />
     <EventRecomendation />
    
    </>
   );
}
