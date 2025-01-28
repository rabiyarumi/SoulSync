import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";





const BiodatasFilter = () => {
    const [filters, setFilters] = useState({
        ageRange: { min: "", max: "" },
        gender: "",
        division: "",
      });
    
      const handleAgeChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
          ...prev,
          ageRange: { ...prev.ageRange, [name]: value },
        }));
      };
    
      const handleGenderChange = (value) => {
        setFilters((prev) => ({ ...prev, gender: value }));
      };
    
      const handleDivisionChange = (value) => {
        setFilters((prev) => ({ ...prev, division: value }));
      };
    
      const handleSubmit = () => {
        console.log("Filters:", filters);
        // Pass `filters` to the backend or use it to fetch data
      };

    return (
         <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filter By Choice</h2>

      {/* Age Range Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Age Range</label>
        <div className="flex gap-2">
          <Input
            type="number"
            name="min"
            placeholder="Min"
            value={filters.ageRange.min}
            onChange={handleAgeChange}
            className="w-full"
          />
          <Input
            type="number"
            name="max"
            placeholder="Max"
            value={filters.ageRange.max}
            onChange={handleAgeChange}
            className="w-full"
          />
        </div>
      </div>

      {/* Gender Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Gender</label>
        <Select onValueChange={handleGenderChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Division Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Division</label>
        <Select onValueChange={handleDivisionChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select Division" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Dhaka">Dhaka</SelectItem>
            <SelectItem value="Chattagra">Chattagra</SelectItem>
            <SelectItem value="Rangpur">Rangpur</SelectItem>
            <SelectItem value="Barisal">Barisal</SelectItem>
            <SelectItem value="Khulna">Khulna</SelectItem>
            <SelectItem value="Mymensingh">Mymensingh</SelectItem>
            <SelectItem value="Sylhet">Sylhet</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Submit Button */}
      <Button onClick={handleSubmit} className="w-full mt-4">
        Apply Filters
      </Button>
    </div>
    );
};

export default BiodatasFilter;