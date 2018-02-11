const React = require('react');
const { Badge } = require('reactstrap');
const Description = require('./Description');
const SwaggerDataType = require('./SwaggerDataType');

const SwaggerParameter = ({ parameter }) => {
  const classname = 'o2h-parameter';
  const {
    name, in: location, description, required,
  } = parameter;
  return (
    <div className={classname}>
      <h5>
        {name}{' '}
        {` (${location}) `}
        { (required || location === 'path') &&
          <Badge color="secondary">required</Badge>
        }
      </h5>
      { description && <Description format="gfm">{description}</Description> }
      <SwaggerDataType header="Type" {...parameter} />
      { parameter.items &&
        <SwaggerDataType header="Item type" {...parameter.items} />
      }
    </div>
  );
};

module.exports = SwaggerParameter;
