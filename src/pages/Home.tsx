import React from "react";
import { Header } from "../components/Header";
import HomeCenterCar from "../media/Home_center_car.png";

export const Home = () => {
  return (
    <>
      <Header></Header>

      {/* Luxury cars on Rent */}

      <section>
        <div className="w-full h-[932px]  bg-[#F1F5F9] flex flex-col justify-center items-center gap-[50px] ">
          <h1 className="text-[32px] font-bold">Luxury cars on Rent</h1>
          <div className="flex flex-col items-start w-[320px] gap-4 bg-white p-6 rounded-xl shadow-xl">
            <div className="flex flex-col items-start w-full gap-10 ">
              <div className="flex flex-col gap-2 ">
                <select name="pickup_location" id="pickup_location">
                  <option id="pickup_location" value="">
                    Pickup Location
                  </option>
                  <option id="pickup_location" value="">
                    New York
                  </option>
                  <option id="pickup_location" value="">
                    Los Angeles
                  </option>
                  <option id="pickup_location" value="">
                    Houston
                  </option>
                  <option id="pickup_location" value="">
                    Chicago
                  </option>
                </select>
                <span className="text-gray-500 text-[14px]">
                  Please select location
                </span>
              </div>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="Pickup-Date">Pick-up Date</label>
                <input
                  className="text-gray-500 text-[14px]"
                  id="Pickup-Date"
                  type="date"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="Return-Date">Return Date</label>
                <input
                  className="text-gray-500 text-[14px]"
                  id="Return-Date"
                  type="date"
                />
              </div>
            </div>
            <div>
              <button className="flex gap-2 bg-[#2563EB] items-center justify-center px-8 py-3 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.626 10.6259L14.7088 14.7092"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.96293 11.7488C11.6387 10.6116 12.886 7.52063 11.7488 4.84487C10.6116 2.16912 7.52063 0.921849 4.84488 2.05902C2.16913 3.19619 0.921857 6.28717 2.05902 8.96292C3.19619 11.6387 6.28718 12.8859 8.96293 11.7488Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-white">Search</p>
              </button>
            </div>
          </div>

          <img className="max-h-74" src={HomeCenterCar} alt="" />
        </div>
      </section>

      {/* Featured Vehicles */}

      <section>
        <div className="w-full h-[800px] bg-amber-400 flex flex-col px-[24px] py-[96px]">
          <div className="flex flex-col justify-center items-center text-center gap-[10px] mb-[70px]">
            <h1 className="text-[36px]">Featured Vehicles</h1>

            <p className="text-[14px] text-[#89909C]">
              Explore our selection of premium vehicles available for your next
              adventure.
            </p>
          </div>

          <div className="group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <img
                alt="Car Image"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
              />
              <p className="absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full">
                Available Now
              </p>
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                <span className="font-semibold">$300</span>
                <span className="text-sm text-white/80"> / day</span>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-medium">BMW X5</h3>
                  <p className="text-muted-foreground text-sm">SUV • 2006</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-600">
                <div className="flex items-center text-sm text-muted-foreground">
                  <img
                    alt=""
                    className="h-4 mr-2"
                    src="data:image/svg+xml,%3csvg%20width='12'%20height='11'%20viewBox='0%200%2012%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%2010V9C11%208.0681%2010.3626%207.28505%209.5%207.063M7.75%201.14538C8.48295%201.44208%209%202.16066%209%203C9%203.83934%208.48295%204.55795%207.75%204.8546M8.5%2010C8.5%209.0681%208.5%208.6022%208.34775%208.23465C8.14475%207.7446%207.7554%207.35525%207.26535%207.15225C6.8978%207%206.4319%207%205.5%207H4C3.06811%207%202.60218%207%202.23464%207.15225C1.74458%207.35525%201.35523%207.7446%201.15224%208.23465C1%208.6022%201%209.0681%201%2010M6.75%203C6.75%204.10457%205.85455%205%204.75%205C3.64543%205%202.75%204.10457%202.75%203C2.75%201.89543%203.64543%201%204.75%201C5.85455%201%206.75%201.89543%206.75%203Z'%20stroke='%234A5565'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />
                  <span>4 Seats</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <img
                    alt=""
                    className="h-4 mr-2"
                    src="/assets/fuel_icon-DWuUSXt8.svg"
                  />
                  <span>Hybrid</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <img
                    alt=""
                    className="h-4 mr-2"
                    src="data:image/svg+xml,%3csvg%20width='12'%20height='10'%20viewBox='0%200%2012%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.16875%203.25035C8.50367%202.16203%207.59638%201.2419%206.5175%200.561602C6.01909%200.245717%205.45093%200.0566427%204.86263%200.0108857C4.27432%20-0.0348713%203.68376%200.0640806%203.1425%200.299102C2.66906%200.522416%202.2571%200.857616%201.94219%201.27576C1.62728%201.6939%201.41888%202.18241%201.335%202.6991C1.305%202.87535%201.2825%203.0441%201.26%203.2091C0.908904%203.26601%200.589454%203.44582%200.358662%203.71646C0.127869%203.98709%200.000753104%204.33092%200%204.6866V6.98535C0%207.18426%200.0790176%207.37503%200.21967%207.51568C0.360322%207.65633%200.551088%207.73535%200.75%207.73535V5.4366V4.6866C0.75%204.48769%200.829018%204.29692%200.96967%204.15627C1.11032%204.01562%201.30109%203.9366%201.5%203.9366H8.52375C9.24649%203.93759%209.93935%204.22514%2010.4504%204.7362C10.9615%205.24725%2011.249%205.94011%2011.25%206.66285V6.9366H10.5C10.3416%206.55039%2010.0466%206.23602%209.67121%206.05346C9.29582%205.87091%208.86636%205.83296%208.46478%205.94685C8.0632%206.06074%207.71761%206.3185%207.49395%206.67095C7.27029%207.02339%207.18423%207.44585%207.25219%207.8577C7.32014%208.26955%207.53736%208.64196%207.86238%208.90388C8.18741%209.16579%208.59749%209.29887%209.01437%209.27771C9.43126%209.25656%209.82576%209.08265%2010.1226%208.78918C10.4194%208.49571%2010.5978%208.10322%2010.6237%207.6866H11.25C11.4489%207.6866%2011.6397%207.60758%2011.7803%207.46693C11.921%207.32628%2012%207.13551%2012%206.9366V6.66285C11.9985%205.85357%2011.715%205.07013%2011.1982%204.4473C10.6815%203.82448%209.96384%203.40122%209.16875%203.25035ZM3.375%203.1866H1.84875C1.84875%203.07035%201.8825%202.95035%201.905%202.8116C1.96979%202.39965%202.13887%202.01111%202.39616%201.68293C2.65346%201.35475%202.99041%201.09783%203.375%200.936602V3.1866ZM4.125%203.1866V0.779102C4.82511%200.688187%205.53513%200.841848%206.135%201.2141C6.9539%201.72417%207.66069%202.39523%208.2125%203.1866H4.125ZM8.925%208.5791C8.73958%208.5791%208.55832%208.52412%208.40415%208.4211C8.24998%208.31809%208.12982%208.17167%208.05886%208.00037C7.98791%207.82906%207.96934%207.64056%208.00551%207.4587C8.04169%207.27685%208.13098%207.1098%208.26209%206.97869C8.3932%206.84758%208.56025%206.75829%208.7421%206.72212C8.92396%206.68594%209.11246%206.70451%209.28377%206.77546C9.45507%206.84642%209.60149%206.96658%209.7045%207.12075C9.80752%207.27492%209.8625%207.45618%209.8625%207.6416C9.8625%207.89024%209.76373%208.1287%209.58791%208.30451C9.4121%208.48033%209.17364%208.5791%208.925%208.5791Z'%20fill='%234A5565'/%3e%3cpath%20d='M4.56345%206.93507C4.40507%206.54886%204.11004%206.23449%203.73465%206.05193C3.35927%205.86938%202.92981%205.83142%202.52823%205.94531C2.12664%206.05921%201.78105%206.31697%201.5574%206.66941C1.33374%207.02186%201.24768%207.44431%201.31564%207.85617C1.38359%208.26802%201.60081%208.64043%201.92583%208.90234C2.25086%209.16426%202.66094%209.29733%203.07782%209.27618C3.4947%209.25502%203.88921%209.08112%204.18605%208.78764C4.48289%208.49417%204.66128%208.10168%204.6872%207.68507H6.6747C6.6747%207.65507%206.6747%207.62132%206.6747%207.59132C6.66728%207.37007%206.69255%207.14894%206.7497%206.93507H4.56345ZM2.9997%208.57757C2.81428%208.57757%202.63302%208.52258%202.47885%208.41957C2.32468%208.31656%202.20452%208.17014%202.13356%207.99883C2.0626%207.82753%202.04404%207.63903%202.08021%207.45717C2.11638%207.27531%202.20567%207.10827%202.33678%206.97715C2.4679%206.84604%202.63494%206.75675%202.8168%206.72058C2.99866%206.68441%203.18716%206.70297%203.35846%206.77393C3.52977%206.84489%203.67619%206.96505%203.7792%207.11922C3.88221%207.27339%203.9372%207.45465%203.9372%207.64007C3.9372%207.88871%203.83843%208.12716%203.66261%208.30298C3.48679%208.47879%203.24834%208.57757%202.9997%208.57757Z'%20fill='%234A5565'/%3e%3c/svg%3e"
                  />
                  <span>Semi-Automatic</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <img
                    alt=""
                    className="h-4 mr-2"
                    src="data:image/svg+xml,%3csvg%20width='8'%20height='11'%20viewBox='0%200%208%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4%205C3.44767%205%203%204.55233%203%204C3%203.44767%203.44767%203%204%203C4.55233%203%205%203.44767%205%204C5%204.55233%204.55233%205%204%205ZM4%202.33333C3.07967%202.33333%202.33333%203.07933%202.33333%204C2.33333%204.92067%203.07967%205.66667%204%205.66667C4.92033%205.66667%205.66667%204.92067%205.66667%204C5.66667%203.07933%204.92033%202.33333%204%202.33333ZM4%209.66667C3.44567%209.66967%200.666667%205.39367%200.666667%204C0.666667%202.15933%202.159%200.666667%204%200.666667C5.841%200.666667%207.33333%202.15933%207.33333%204C7.33333%205.375%204.54567%209.66967%204%209.66667ZM4%200C1.791%200%200%201.791%200%204C0%205.67267%203.335%2010.6703%204%2010.6667C4.65467%2010.6703%208%205.65%208%204C8%201.791%206.209%200%204%200Z'%20fill='%234A5565'/%3e%3c/svg%3e"
                  />
                  <span>New York</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
