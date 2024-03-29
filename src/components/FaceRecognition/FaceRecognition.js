import React from 'react';
import './FaceRecognition.css';
import './border.css';
import StatusInfo from '../StatusInfo/StatusInfo';


const FaceRecognition = ({ imageUrl, box, disableCSS }) => {


	if(imageUrl === '')
	{
		return (
			<div>
				{/* <h3> Welcome </h3> */}
			</div>
		);
	}
	if(!disableCSS)
	{
		if(window.matchMedia("only screen and (max-width: 760px)").matches) /*For Mobile Users*/
		{	
			return (
				<div>
				<div style={{marginLeft: '8%', marginRight: '8%', marginTop: '1.8rem', marginBottom: '2.8rem', display: 'flex', justifyContent: 'center'}}>
					<div style={{margin: '3%'}} className="absolute mt2 gradient-border">
						<img id="inputimage" alt='' src={imageUrl} width="500px" height="auto" style={{borderRadius: '25px',  display: 'flex', alignItems: 'center', justifyContent: 'center', width: '600px', height: 'auto'}} />
						<div>
				        {(()=>{
				          let container =[];
					        box.forEach((val,i)=>{
					            container.push(<div key={i}>
					                          	<div className="bounding-box" style={{top: box[i].topRow, right: box[i].rightCol, bottom: box[i].bottomRow, left: box[i].leftCol}}></div>
					                           </div>)
				            });
				            	return container;     
				        })()}
						</div> {/*For Displaying face-box by 'html element' & 'css property' using data from every index position of box(an array of objects)*/}
					</div>
				</div>
				</div>
			);
		}
		else
		{	
			return (
				<div>
				<div style={{marginLeft: '10%', marginRight: '10%', marginTop: '15px', marginBottom: '2.8rem', display: 'flex', justifyContent: 'center'}}>
					<div style={{margin: '3%'}} className="absolute mt2 gradient-border">
						<img id="inputimage" alt='' src={imageUrl} width="500px" height="auto" style={{borderRadius: '25px',  display: 'flex', alignItems: 'center', justifyContent: 'center', width: '600px', height: 'auto'}} />
						<div>
				        {(()=>{
				          let container =[];
					        box.forEach((val,i)=>{
					            container.push(<div key={i}>
					                          	<div className="bounding-box" style={{top: box[i].topRow, right: box[i].rightCol, bottom: box[i].bottomRow, left: box[i].leftCol}}></div>
					                           </div>)
				            });
				            	return container;     
				        })()}
						</div> {/*For Displaying face-box by 'html element' & 'css property' using data from every index position of box(an array of objects)*/}
					</div>
				</div>
				</div>
			);
		}
	}
	else
	{
		return (
			<div>
				<br/><br/>
				<StatusInfo />
			</div>
		);
	}
}

export default FaceRecognition;