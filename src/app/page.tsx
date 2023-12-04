import { Input } from "@src/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@src/components/ui/card";
import dynamic from "next/dynamic";

function ModeToggle() {
  return (
    <div className='h-screen'>
      <Card>
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>Card content</CardContent>
      </Card>
    </div>
  );
}
export default ModeToggle;
