import { Badge } from "@/components/ui/badge";
import { RoadAccess } from "@/types";
import { Bus, Car, AlertTriangle } from "lucide-react";
import clsx from "clsx";

interface RoadAccessBadgeProps {
    access: RoadAccess;
    className?: string;
}

export function RoadAccessBadge({ access, className }: RoadAccessBadgeProps) {
    const config = {
        "Bus Big": {
            color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200",
            icon: Bus,
            label: "Bus Accessible"
        },
        "Small Car Only": {
            color: "bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200",
            icon: Car,
            label: "Small Car Only"
        },
        "Steep Terrain": {
            color: "bg-rose-100 text-rose-800 hover:bg-rose-200 border-rose-200",
            icon: AlertTriangle,
            label: "Steep Terrain"
        }
    };

    const { color, icon: Icon, label } = config[access];

    return (
        <Badge variant="outline" className={clsx("flex gap-1 items-center font-medium", color, className)}>
            <Icon className="h-3 w-3" />
            {label}
        </Badge>
    );
}
