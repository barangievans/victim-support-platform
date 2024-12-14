import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import './ResourceList.css'; // Import the CSS file

const ResourceList = () => {
  return (
    <div className="resource-list">
      <h1>Victim Support Services - Resource List</h1>
      <ul>
        <li>
          <h2>Legal Aid and Advocacy</h2>
          <ul>
            <li>
              <Link to="/legal-aid">Legal Aid Society: Free legal services for domestic violence victims</Link>
            </li>
            <li>
              <Link to="/national-domestic-violence-hotline">National Domestic Violence Hotline: Legal advocacy support</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Mental Health Support</h2>
          <ul>
            <li>
              <Link to="/crisis-helpline">24/7 Crisis Helpline: Talk to a trained counselor</Link>
            </li>
            <li>
              <Link to="/domestic-violence-therapy">Therapists for Domestic Violence Survivors: Counseling and therapy for trauma victims</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Healthcare and Medical Services</h2>
          <ul>
            <li>
              <Link to="/hospital-emergency-room">Local Hospital Emergency Room: Immediate medical care</Link>
            </li>
            <li>
              <Link to="/rape-crisis-center">Rape Crisis Center: Medical exams and counseling services</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Shelters and Housing Assistance</h2>
          <ul>
            <li>
              <Link to="/safe-haven-shelter">Safe Haven Shelter: Emergency housing for abuse victims</Link>
            </li>
            <li>
              <Link to="/homeless-victims-housing">Housing for Homeless Victims: Resources for temporary housing</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Financial Support</h2>
          <ul>
            <li>
              <Link to="/victim-compensation-fund">Victim Compensation Fund: Financial assistance for medical costs</Link>
            </li>
            <li>
              <Link to="/emergency-relief-fund">Emergency Relief Fund: Short-term financial help</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Support Groups</h2>
          <ul>
            <li>
              <Link to="/domestic-violence-support-group">Domestic Violence Support Group: Peer support for survivors</Link>
            </li>
            <li>
              <Link to="/survivors-network">Survivors Network: An online community for victims</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Hotlines and Helplines</h2>
          <ul>
            <li>
              <Link to="/national-domestic-violence-hotline">National Domestic Violence Hotline: 1-800-799-7233</Link>
            </li>
            <li>
              <Link to="/sexual-assault-helpline">Sexual Assault Helpline: 1-800-656-HOPE (4673)</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ResourceList;
