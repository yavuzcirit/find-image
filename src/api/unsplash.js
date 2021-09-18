import axios from 'axios'

export default axios.create({
	baseURL :'https://api.unsplash.com',
	headers:{
				Authorization:
					'Client-ID iGmfckuatrXZ_fJKbTmueqiQHGpPeQ2VfhhXdp8ENXo'
			}
})