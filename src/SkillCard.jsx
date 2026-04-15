export function SkillCard({title,points})
{

    return(
        <div className=" group bg-gray-800 shadow-xl rounded-xl px-6 py-6 pb-6 flex flex-col h-64  mx-6 hover:scale-120 hover:rotate-1 hover:bg-gray-900 duration:300 hover:cursor-pointer transition-all ease-in-out">
       <h3 className="text-xl text-white mb-3 h-12 font-bold group-hover:text-white">{title}</h3>
       <ul className="list-disc space-y-2">
        {points.map(
        point=>
            <li className="text-base text-white group-hover:text-white">{point}</li>

        )}
       </ul>

        </div>
    )


}