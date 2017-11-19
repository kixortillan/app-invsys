import React from 'react';
import {
    Grid,
    Button,
    Modal,
    Header,
    Icon,
    Card,
} from 'semantic-ui-react';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    header: 'Project Report - April',
                    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
                    meta: 'ROI: 30%',
                  },
                  {
                    header: 'Project Report - May',
                    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
                    meta: 'ROI: 34%',
                  },
                  {
                    header: 'Project Report - June',
                    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
                    meta: 'ROI: 27%',
                  },
            ],
        }
    }
    
    render() {
        const { items } = this.state;        

        return (
            <Grid.Row columns="5" centered>
                <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
                    <Header icon='archive' content='Archive Old Messages' />
                    <Modal.Content>
                        <Card.Group items={items} />
                    </Modal.Content>
                    <Modal.Actions>
                      <Button basic color='red' inverted>
                        <Icon name='remove' /> No
                      </Button>
                      <Button color='green' inverted>
                        <Icon name='checkmark' /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>
            </Grid.Row>
        );
    }

}

export default Dashboard;