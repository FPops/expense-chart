import logo from './assets/logo.svg'
import {Bar} from 'react-chartjs-2'
import {Chart as CharJS, CategoryScale, LinearScale, BarElement, Title, Tooltip} from 'chart.js'

CharJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)


function App() {
  const state = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        backgroundColor :"hsl(10, 79%, 65%)",
        hoverBackground :"hsl(186, 34%, 60%)",
        borderRadius:8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]
      }
    ]
  }


  return (
    <div className="bg-orange-100 h-screen w-full">

      <div className='flex flex-col gap-5 justify-center items-center h-full'>

        {/* top part */}
        <div className='bg-orange-400 flex flex-row items-center justify-between py-5 px-7 w-[400px] rounded-xl'>
          <div className='flex flex-col items-start'>
            <h3 className='text-white text-sm'>My balance</h3>
            <p className='text-white text-2xl font-bold'>$921.48</p>
          </div>
        <img src={logo} alt="" className='w-[50px]' />
        </div>

        {/* bottom part */}
        <div className='bg-orange-50 flex flex-col py-5 px-7 w-[400px] rounded-xl'>
          <h1 className='text-2xl font-bold mb-3'>Spending - Last 7 days</h1>
          {/* graph */}
          <div className='h-[150px] w-[325px] flex justify-center items-center mt-5'>
            <Bar data={state} />
          </div>

          <hr className='h-[2px] bg-black opacity-25 mt-10'/>

          <div className='flex flex-row items-center justify-between pt-7 pb-5'>

            <div className='flex flex-col items-start justify-center'>
              <h3 className='text-xs'>Total this month</h3>
              <p className='text-4xl font-bold'>$478.33</p>
            </div>

            <div className='flex flex-col items-end justify-center'>
              <h6 className='font-bold text-small'>+2.4%</h6>
              <p className='text-xs'>from last month</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
