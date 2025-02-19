
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Camera } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-50/50 p-4 md:p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-white/80 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>
          <h1 className="text-lg font-medium text-blue-900">Shoppers Drug Mart</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto">
        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg border border-blue-100">
          {/* Image Section */}
          <div className="border-b border-blue-50">
            <img 
              src="/lovable-uploads/de3a4d7f-8714-4f1d-b41e-d5c9080da678.png" 
              alt="Prescription"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-6">
            {/* Patient Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-700">Patient Name</label>
              <Select defaultValue="malak">
                <SelectTrigger className="w-full bg-white border-blue-100">
                  <SelectValue placeholder="Select patient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="malak">Malak mino</SelectItem>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Order Details */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-600 mb-1">Order Number</p>
                <p className="text-base font-medium text-blue-900">#SHO324000575</p>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-600 mb-1">RX Number</p>
                <p className="text-base font-medium text-blue-900">[22222333, 8888888]</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-600 mb-1">Pickup Location</p>
              <p className="text-base font-medium text-blue-900">678 Queen Street East,</p>
              <p className="text-sm text-blue-600">Toronto, M4M 1G8</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-4">
              <Button 
                className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
              >
                Mark this order as picked up to proceed to the next one
              </Button>
              <Button 
                variant="outline"
                className="w-full flex items-center justify-center gap-2 border-blue-200 hover:bg-blue-50 text-blue-700"
              >
                <Camera className="w-4 h-4" />
                Retake Picture
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
