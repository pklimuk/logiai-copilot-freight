
import { Mail, Send, BarChart, Minus, Award, Expand } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ValueCard from "@/components/ValueCard";
import DashboardChart from "@/components/DashboardChart";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      
      {/* Main Container */}
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 px-12">
          {/* Hero Section */}
          <section className="py-17 space-y-8">
            <h1 className="text-brand-light text-5xl font-bold leading-tight tracking-tight max-w-4xl animate-fade-in">
              3P Logistics Communication Runs like it's 1998
            </h1>
            
            {/* Value Proposition Cards */}
            <div className="space-y-8">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard 
                  icon={Mail}
                  title="Load requests come via email"
                />
                <ValueCard 
                  icon={Send}
                  title="Carriers reply via SMS / WhatsApp"
                />
                <ValueCard 
                  icon={BarChart}
                  title="Updates live in TMS, spreadsheets, sticky notes, or nowhere"
                />
              </div>
              
              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard 
                  icon={Minus}
                  title="Therefore TMS ≠ SSOT"
                />
                <ValueCard 
                  icon={Award}
                  title="Missed SLA or its update = penalties"
                />
                <ValueCard 
                  icon={Expand}
                  title="Ops don't scale with headcount"
                />
              </div>
            </div>
          </section>
          
          {/* Dashboard Section */}
          <section className="py-8">
            <DashboardChart />
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
