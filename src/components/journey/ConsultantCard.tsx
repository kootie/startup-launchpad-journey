
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface ConsultantCardProps {
  name: string;
  title: string;
  specialty: string;
  avatar: string;
  rating: number;
  hourlyRate: number;
}

export const ConsultantCard: React.FC<ConsultantCardProps> = ({
  name,
  title,
  specialty,
  avatar,
  rating,
  hourlyRate
}) => {
  return (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription>{title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Badge variant="outline" className="bg-muted/50">{specialty}</Badge>
        </div>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>
        <p className="text-lg font-semibold">${hourlyRate}/hr</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Profile</Button>
        <Button>Book Session</Button>
      </CardFooter>
    </Card>
  );
};
