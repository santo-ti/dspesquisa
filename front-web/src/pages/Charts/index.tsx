import React, { useEffect, useState } from 'react';
import Filters from '../../components/Filters';
import './styles.css';
import { barOptions, pieOptions } from './chart-options';
import Chart from 'react-apexcharts';
import { PieChartData, BarChartData } from './types';
import axios from 'axios';
import { buildBarSeries, getPlatformChartData, getGenreChartData } from './helpers';

const initialPieData = {
	labels: [],
	series: []
}

const BASE_URL = 'http://localhost:8080'

const Charts = () => {

	const [barChartData, setBarChartData] = useState<BarChartData[]>([]);

	const [platformChartData, setPlatformChartData] = useState<PieChartData>(initialPieData);

	const [genreChartData, setGenreChartData] = useState<PieChartData>(initialPieData);

	useEffect(() => {
		async function getData() {
			const recordsResponse = await axios.get(`${BASE_URL}/records`);
			const gamesResponse = await axios.get(`${BASE_URL}/games`);

			const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
			setBarChartData(barData);

			const platformChartData = getPlatformChartData(recordsResponse.data.content);
			setPlatformChartData(platformChartData);

			const genreChartData = getGenreChartData(recordsResponse.data.content);
			setGenreChartData(genreChartData);
		}

		getData();
	}, []);

	return (
		<div className="page-container">
			<Filters link="/records" linkText="VER TABELA" />
			<div className="chart-container">
				<div className="top-related">
					<h1 className="top-related-title">
						Jogos mais Votados
					</h1>
					<div className="games-container">
						<Chart
							options={barOptions}
							type="bar"
							width="800"
							height="650"
							series={[{ data: barChartData }]}
						/>
					</div>
				</div>
				<div className="charts">
					<div className="platform-chart">
						<h2 className="chart-title">Plataformas</h2>
						<Chart
							options={{ ...pieOptions, labels: platformChartData?.labels }}
							type="donut"
							series={platformChartData?.series}
							width="250"
						/>
					</div>
					<div className="genre-chart">
						<h2 className="chart-title">Gêneros</h2>
						<Chart
							options={{ ...pieOptions, labels: genreChartData?.labels }}
							type="donut"
							series={genreChartData?.series}
							width="250"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Charts;