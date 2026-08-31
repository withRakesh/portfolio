function CodeMockup() {
    return (
        <div className="w-72 md:w-96 rounded-lg overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl font-mono text-sm">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-3 text-white/40 text-xs">rakesh.js</span>
            </div>

            {/* Code content */}
            <div className="p-5 leading-relaxed">
                <p className="text-white/30">// Status: updating skills daily</p>


                <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-300">developer</span> = {'{'}
                </p>
                <p className="pl-5">
                    <span className="text-sky-300">name</span>:{' '}
                    <span className="text-orange-300">'Rakesh'</span>,
                </p>
                <p className="pl-5">
                    <span className="text-sky-300">learning</span>:{' '}
                    <span className="text-accent">true</span>,
                </p>
                <p className="pl-5">
                    <span className="text-sky-300">Skills</span>: [
                    <span className="text-orange-300">'MERN'</span>,{' '}
                    <span className="text-orange-300">'Responsive design'</span>,{' '}
                    <span className="text-orange-300">Java</span>],
                </p>

                <p className="pl-5">
                    <span className="text-sky-300">currentlyLearning</span>:[
                    <span className="text-orange-300">'AI-assisted development'</span>,{' '}
                      <span className="text-orange-300">'AI tools & workflows'</span>],
                </p>
                <p className="pl-5">
                    <span className="text-sky-300">mindset</span>:{' '}
                    <span className="text-orange-300">'grow daily'</span>,
                </p>
                <p>{'}'}</p>

                <p className="mt-3">
                    <span className="w-2 h-4 inline-block bg-accent animate-pulse align-middle"></span>
                </p>
            </div>
        </div>
    )
}

export default CodeMockup