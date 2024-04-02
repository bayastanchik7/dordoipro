import HeaderMainLogoPage from '../components/MainPageComponents/HeaderMainLogoPage/HeaderMainLogoPage'
import Headerendmainand from '../components/MainPageComponents/Headerendmainend/Headerendmain'
import HeaderMainPage from '../components/MainPageComponents/HedaerMainPage/HeaderMainPage'
import MainPageSectionNumber1 from '../components/MainPageComponents/MainPageSectionNumber1/MainPageSectionNumber1'
import MainPagesminiblockkg from '../components/MainPageComponents/MainPagesminiblock/MainPagesminiblockkg'

const MainPages: React.FC = () => {
	return (
		<div>
			<HeaderMainPage />
			<HeaderMainLogoPage />
			<Headerendmainand />
			<MainPageSectionNumber1 />
			<MainPagesminiblockkg />
		</div>
	)
}

export default MainPages
