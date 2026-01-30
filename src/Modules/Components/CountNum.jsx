import CountUp from "react-countup";
import React from "react";

const CountNum = () => {
    return (
        <div className="container d-flex justify-content-center text-center mt-5">
            <div className="row w-100" style={{ maxWidth: '1200px' }}>
                <div className="col">
                    <CountUp start={0} end={2} delay={3}>
                        {({ countUpRef }) => (
                            <div>
                                <span className="fs-1" ref={countUpRef} />
                                <p className="fs-4">Year Experience</p>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="col">
                    <CountUp start={0} end={4} delay={3}>
                        {({ countUpRef }) => (
                            <div>
                                <span className="fs-1" ref={countUpRef} />
                                <p className="fs-4">Programming Languages</p>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="col">
                    <CountUp start={0} end={6} delay={3}>
                        {({ countUpRef }) => (
                            <div>
                                <span className="fs-1" ref={countUpRef} />
                                <p className="fs-4">Project Completed</p>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="col">
                    <CountUp
                        end={150}
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                        className="fs-1"
                    />
                    <p className="fs-4">+Code Commit</p>
                </div>
            </div>
        </div>
    );
};

export default CountNum;
