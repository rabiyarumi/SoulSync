/* eslint-disable react/prop-types */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";





const BiodatasFilter = ({ filters, onFilterChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ [name]: value }); // Update filter state in the parent component
      };
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-medium mb-4">Filters</h3>
  
        {/* Gender Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Gender</label>
          <Select
            value={filters.gender || "all"}
            onValueChange={(value) => handleChange("gender", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
  
        {/* Age Range Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Age Range</label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min Age"
              value={filters.minAge}
              onChange={(e) => handleChange("minAge", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Max Age"
              value={filters.maxAge}
              onChange={(e) => handleChange("maxAge", e.target.value)}
            />
          </div>
        </div>
  
        {/* Division Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Division</label>
          <Select
            value={filters.division || "all"}
            onValueChange={(value) => handleChange("division", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Division" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
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
  
        {/* Apply Button (Optional) */}
        <Button onClick={() => console.log("Filters applied")} className="w-full mt-4">
          Apply Filters
        </Button>
      </div>
    );
};

export default BiodatasFilter;