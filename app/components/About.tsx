

export default function About({title,description}:{
    title:string,
    description:string
}) {
  return (
    <div className="max-w-4xl mx-auto mt-16">
    <p className="text-2xl md:text-4xl font-bold text-center">{title}</p>
    <p className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4">
      {description}
    </p>
  </div>
  )
}
