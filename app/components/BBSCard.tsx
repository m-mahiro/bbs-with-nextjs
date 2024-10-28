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

type CardProps = React.ComponentProps<typeof Card>

const BBSCard = () => {
	return (
		<div>
			<Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-cilck.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit consectetur, ullam est omnis nihil iusto illo similique id dolore debitis quidem maxime, dolores doloremque ipsa voluptas veniam enim cumque sapiente.
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-post/1"} className="text-blue-500">Read More</Link>
        </CardFooter>
      </Card>

		</div>
	)
}

export default BBSCard
