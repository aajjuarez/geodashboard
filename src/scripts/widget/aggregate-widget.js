import WPSWidget from './wps-widget';

import requestTemplate from '../../templates/widget/wps/aggregate.hbs';

class AggregateWidget extends WPSWidget {
  constructor(config) {
    super(config);
    this.property = config.property;
    this.function = config.function;
    this.requestTemplate = requestTemplate;
  }

  parseResponse(value) {
    this.value = value.AggregationResults[0];
  }
}

export default AggregateWidget;