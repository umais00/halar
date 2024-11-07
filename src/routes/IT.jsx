import React from "react";
import Card3 from "../components/card3";

function IT() {
  return (
    <div>
      <section class="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div class="flex flex-wrap items-center justify-between mb-8">
          <h2 class="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Courses
          </h2>
          <a
            href="#"
            class="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
          >
            Go to insights -
          </a>
        </div>

        <div class="flex flex-wrap justify-between -mx-4">
          <Card3
            imgSrc="diploma.jpg"
            category="Diploma"
            title="Information Technology"
            description={[
              "1st Semester:",
              "Office Automation",
              "ICT",
              "Web Design and Development",
              "C Language",
              "Operating System",
            ]}
            link="#"
          />
          <Card3
            imgSrc="diploma.jpg"
            category="Diploma"
            title="Information Technology"
            description={[
              "2nd Semester",
              "A+ Hardware Maintenance",
              "Data Communication & Networking",
              "Desktop Publishing",
              "Database Management System",
              "Live Project",
            ]}
            link="#"
          />
          <Card3
            imgSrc="https://img.freepik.com/free-vector/realistic-golden-luxury-certificate-template_23-2149052184.jpg?t=st=1728897923~exp=1728901523~hmac=7a043c04a46a566b5133f0f695436020eac4503c502ce71c36a7c9e001ba9cd1&w=996"
            category="Certificate"
            title="Information Technology"
            description={[
              "(only 6 months)",
              "Office Automation",
              "ICT",
              "Web Design and Development",
              "C Language",
              "Operating System",
            ]}
            link="#"
          />
        </div>
      </section>
      <section class="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div class="flex flex-wrap items-center justify-between mb-8">
          <h2 class="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Short Courses
          </h2>
          <a
            href="#"
            class="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
          >
            Go to insights -
          </a>
        </div>

        <div class="flex flex-wrap justify-between -mx-4">
          <Card3
            imgSrc="diploma.jpg"
            category="Diploma"
            title="Information Technology"
            description={[
              "Office Automation",
              "ICT",
              "Web Design and Development",
              "C Language",
              "Operating System",
            ]}
            link="#"
          />
          <Card3
            imgSrc="diploma.jpg"
            category="Diploma"
            title="Information Technology"
            description={[
              "Office Automation",
              "ICT",
              "Web Design and Development",
              "C Language",
              "Operating System",
            ]}
            link="#"
          />
          <Card3
            imgSrc="diploma.jpg"
            category="Diploma"
            title="Information Technology"
            description={[
              "Office Automation",
              "ICT",
              "Web Design and Development",
              "C Language",
              "Operating System",
            ]}
            link="#"
          />
        </div>
      </section>
    </div>
  );
}

export default IT;
