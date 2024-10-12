type company={
    name: string;
    description: string;
    tenure: string;
    websiteLink: string;
}
type companies={
    title:string
    companies:company[]
}



export default function Experience({title,companies}:companies) {
  return (
    <div className="max-w-4xl mx-auto my-16">
      <p className="text-2xl md:text-4xl font-bold text-center">{title}</p>
      <p className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4 grid gap-8">
        {companies.map((company, index) => {
          return (
            <div key={index} className="mb-4">
              <a
                href={company.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-xl font-bold hover:underline text-black">
                  {company.name}
                </h1>
              </a>

              <p className="text-black"> {company.tenure}</p>
              <p> {company.description}</p>
            </div>
          );
        })}
      </p>
    </div>
  )
}


