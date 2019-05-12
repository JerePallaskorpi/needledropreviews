import moment from 'moment';
import React from 'react';
import {
    VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
} from 'victory';
import { ratingDetails } from '../../../utils/rating';


const YearRatingChart = ({ albumReviews, reviewYears }) => {
    const data = [
        { rating: 0, amount: albumReviews.filter(review => review.details.rating === 0).length },
        { rating: 1, amount: albumReviews.filter(review => review.details.rating === 1).length },
        { rating: 2, amount: albumReviews.filter(review => review.details.rating === 2).length },
        { rating: 3, amount: albumReviews.filter(review => review.details.rating === 3).length },
        { rating: 4, amount: albumReviews.filter(review => review.details.rating === 4).length },
        { rating: 5, amount: albumReviews.filter(review => review.details.rating === 5).length },
        { rating: 6, amount: albumReviews.filter(review => review.details.rating === 6).length },
        { rating: 7, amount: albumReviews.filter(review => review.details.rating === 7).length },
        { rating: 8, amount: albumReviews.filter(review => review.details.rating === 8).length },
        { rating: 9, amount: albumReviews.filter(review => review.details.rating === 9).length },
        { rating: 10, amount: albumReviews.filter(review => review.details.rating === 10).length },
    ];
    console.log(reviewYears);
    return (
        <div style={{ marginTop: '50px', padding: '1rem' }}>
            <h3>{`Ratings Total (${albumReviews.length})`}</h3>
            <VictoryChart

                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
            >
                <VictoryAxis
                    tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    standalone={false}
                    style={{ axis: { stroke: 'none' } }}
                />
                <VictoryAxis
                    dependentAxis
                    standalone={false}
                    style={{ axis: { stroke: 'none' } }}
                />
                <VictoryBar
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 },
                    }}
                    style={{
                        data: {
                            fill: d => (ratingDetails.find(rating => rating.score === d.rating).color),
                            stroke: d => (d.amount === 3 ? '#000000' : '#c43a31'),
                            fillOpacity: 0.7,
                            strokeWidth: 1,
                        },
                        labels: {
                            fontSize: 10,
                            fill: d => (d.amount === 3 ? '#000000' : '#c43a31'),
                        },
                    }}
                    data={data}
                    labels={d => d.amount}
                    x="rating"
                    y="amount"
                />
            </VictoryChart>
            { reviewYears.map((year) => {
                const reviewsByYear = albumReviews.filter(review => moment(review.date).year() === year);
                const yearData = [
                    { rating: 0, amount: reviewsByYear.filter(review => review.details.rating === 0).length },
                    { rating: 1, amount: reviewsByYear.filter(review => review.details.rating === 1).length },
                    { rating: 2, amount: reviewsByYear.filter(review => review.details.rating === 2).length },
                    { rating: 3, amount: reviewsByYear.filter(review => review.details.rating === 3).length },
                    { rating: 4, amount: reviewsByYear.filter(review => review.details.rating === 4).length },
                    { rating: 5, amount: reviewsByYear.filter(review => review.details.rating === 5).length },
                    { rating: 6, amount: reviewsByYear.filter(review => review.details.rating === 6).length },
                    { rating: 7, amount: reviewsByYear.filter(review => review.details.rating === 7).length },
                    { rating: 8, amount: reviewsByYear.filter(review => review.details.rating === 8).length },
                    { rating: 9, amount: reviewsByYear.filter(review => review.details.rating === 9).length },
                    { rating: 10, amount: reviewsByYear.filter(review => review.details.rating === 10).length },
                ];
                return (
                    <>
                        <h3>{`Ratings in ${year} (${reviewsByYear.length})`}</h3>
                        <VictoryChart

                            // adding the material theme provided with Victory
                            theme={VictoryTheme.material}
                        >
                            <VictoryAxis
                                tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                standalone={false}
                                style={{ axis: { stroke: 'none' } }}
                            />
                            <VictoryAxis
                                dependentAxis
                                standalone={false}
                                style={{ axis: { stroke: 'none' } }}
                            />
                            <VictoryBar
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 1000 },
                                }}
                                style={{
                                    data: {
                                        fill: d => (ratingDetails.find(rating => rating.score === d.rating).color),
                                        stroke: d => (d.amount === 3 ? '#000000' : '#000000'),
                                        fillOpacity: 0.7,
                                        strokeWidth: 1,
                                    },
                                    labels: {
                                        fontSize: 10,
                                        fill: d => (d.amount === 3 ? '#000000' : '#c43a31'),
                                    },
                                }}
                                data={yearData}
                                labels={d => d.amount}
                                x="rating"
                                y="amount"
                            />
                        </VictoryChart>
                    </>
                );
            })}
        </div>
    );
};

export default YearRatingChart;
