
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Camera } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50/95 p-4 md:p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-lg font-medium text-gray-800">Shoppers Drug Mart</h1>
        </div>
        <Button 
          variant="outline"
          className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-all"
        >
          <Camera className="w-4 h-4" />
          Retake Picture
        </Button>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto">
        {/* Prescription Image */}
        <div className="mb-6 bg-white rounded-xl overflow-hidden shadow-sm">
          <img 
            src="/lovable-uploads/de3a4d7f-8714-4f1d-b41e-d5c9080da678.png" 
            alt="Prescription"
            className="w-full object-cover"
          />
        </div>

        {/* Details Card */}
        <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="space-y-4">
            {/* Order Number */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Order Number</p>
              <p className="text-base font-medium text-gray-900">#SHO324000575</p>
            </div>

            {/* RX Number */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">RX Number</p>
              <p className="text-base font-medium text-gray-900">[22222333, 8888888]</p>
            </div>

            {/* Patient Name */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Patient Name</p>
              <p className="text-base font-medium text-gray-900">Malak mino</p>
            </div>

            {/* Address */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Pickup Location</p>
              <p className="text-base font-medium text-gray-900">678 Queen Street East,</p>
              <p className="text-sm text-gray-500">Toronto, M4M 1G8</p>
            </div>
          </div>

          {/* Action Button */}
          <Button 
            className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
          >
            Mark this order as picked up to proceed to the next one
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Index;
