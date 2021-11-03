

import Button from 'react-bootstrap/Button'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";



function HomePage() {

    return (
        <div >
            <Container fluid id="weather-header" className="background-style" >
                <div class="col-md-6 mx-auto text-white text-center">
                    <h4 class="h4 mt-2 mb-5">Weather Forecast and Weather History</h4>
                    <div id="locations">
                        <Button variant="outline-info" id="horsens">Horsens</Button>{' '}
                        <Button variant="outline-info" id="aarhus">Århus</Button>{' '}
                        <Button variant="outline-info" id="copenhagen">Copenhagen</Button>{' '}
                    </div>
                </div>

            </Container>

            <div class="col-lg-10 col-md-12 offset-lg-1 ">
                <div class="card py-2 mb-4 city" id="horsens" className="BgStyle">
                    <div class="row text-center" id="horsens_now">
                        <div class="col-12">

                            <p class="my-0" id="horsens_now_time">October 13</p>
                            <b>
                                <p class="my-0 lead" id="horsens_now_temp">23*</p>
                            </b>
                            <p class="my-0" id="horsens_now_min-max-temp">23/46</p>
                            <p class="my-0" id="horsens_now_type">cloudy</p>
                            <p class="my-3" id="horsens_place"><i class="fas fa-map-marked-alt"></i> Horsens</p>
                        </div>
                    </div>
                    <div class="row text-center py-2" id="aarhus_trigger">
                        <div class="col-6">
                            <button class="btn my_btn" type="button" data-toggle="collapse"
                                    data-target="#horsens-data-history" aria-expanded="false"
                                    aria-controls="horsens-data-history">
                                WEATHER HISTORY
                            </button>
                        </div>

                        <div class="col-6">
                            <button class="btn my_btn" type="button" data-toggle="collapse"
                                    data-target="#horsens-data-forecast" aria-expanded="false"
                                    aria-controls="horsens-data-forecast">
                                WEATHER FORECAST
                            </button>
                        </div>
                    </div>
                    <div class="row" id="horsens-data">
                        <div class="col-12">
                            <div class="collapse" id="horsens-data-history">
                                <b>
                                    <p>Weather History for Horsens</p>
                                </b>
                                <table id="horsens-data-history-table" class="table table-striped">
                                    <thead>
                                        <tr>

                                            <th scope="col">Date and Time</th>
                                            <th scope="col">Weather Type</th>
                                            <th scope="col">Value</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Direction/Precipitation Type</th>
                                        </tr>
                                    </thead>
                                    <tbody id="weather-">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="collapse" id="horsens-data-forecast">
                                <b>
                                    <p>Weather Forecast for Horsens</p>
                                </b>
                                <table id="horsens-data-forecast-table" class="table table-striped">
                                    <thead>
                                        <tr>

                                            <th scope="col">Date and Time</th>
                                            <th scope="col">Weather Type</th>
                                            <th scope="col">Value</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Direction/Precipitation Type</th>
                                        </tr>
                                    </thead>
                                    <tbody id="weather-">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;