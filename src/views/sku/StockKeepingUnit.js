import React from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
    Table,
} from 'semantic-ui-react'

class StockKeepingUnit extends React.Component {

    render() {
        return (
            <Grid.Column columns="5" centered>
            	<Table celled>

                       <Table.Header>
                           <Table.Row>
                                <Table.HeaderCell>Header1</Table.HeaderCell>
                                <Table.HeaderCell>Header2</Table.HeaderCell>
                                <Table.HeaderCell>Header3</Table.HeaderCell>
                           </Table.Row>
                       </Table.Header>

                       <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    Cell
                                </Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                              </Table.Row>
                              <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                              </Table.Row>
                       </Table.Body>

                       <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3'>
                                  <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                      <Icon name='left chevron' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                      <Icon name='right chevron' />
                                    </Menu.Item>
                                  </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                       </Table.Footer>

                </Table>
            </Grid.Column>
        );
    }

}

export default StockKeepingUnit;