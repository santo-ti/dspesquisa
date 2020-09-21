import { Platform } from "../Records/types";

export type Game = {
    id: number;
    title: string;
    platform: Platform;
}

export type PieChartData = {
    labels: string[];
    series: number[];
}

export type BarChartData = {
    x: string;
    y: number;
}