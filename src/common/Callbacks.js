export default function Callbacks(){
	let cb = {}
	let funcs = []

	cb.subscribe = function(callback){
		funcs.push(callback)	
	}

	cb.fire = function(data){
		funcs.forEach(f => {
			f(data)
		})
	}

	return cb
}