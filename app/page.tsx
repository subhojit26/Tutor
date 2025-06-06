import React from 'react'
import CompanionCard from "@/components/ui/CompanionCard";
import CompanionsList from "@/components/ui/CompanionsList";
import CTA from "@/components/ui/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">
        Popular Companions
      </h1>
      <section className="home-section">
          <CompanionCard
            id="123"
            name="Neura the brainy explorer"
            topic="Neural network of the brain"
            subject="science"
            duration={45}
            color="#ffda6e"
          />
          <CompanionCard
              id="456"
              name="Verba the vocabulary builder"
              topic="English Literature"
              subject="english"
              duration={25}
              color="#BDE7FF"
          />
          <CompanionCard
              id="789"
              name="Countsy the number wizard"
              topic="Derivatives and Integrals"
              subject="maths"
              duration={30}
              color="#e5d0ff"
          />
      </section>
        <section className="home-section">
            <CompanionsList
                title="Recently Completed Sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
            <CTA/>
        </section>
    </main>
  )
}

export default Page