import React from 'react'
import { cn } from "@/lib/utils";
import { BellRing, Car, Check } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import BBSCard from './BBSCard';

type CardProps = React.ComponentProps<typeof Card>



const BBSCardList = () => {
	return (
		<div  className="grid lg:grid-cols-3 px-4 py-4">
			<BBSCard/>
			<BBSCard/>
			<BBSCard/>
			<BBSCard/>
		</div>
	)
}

export default BBSCardList