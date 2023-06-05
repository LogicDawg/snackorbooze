import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <h4>We have over {snacks.length} differnt snacks!</h4>
            <h4>In addition over {drinks.length} different Drinks!</h4>
            
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
