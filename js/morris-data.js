$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            allocated: 2666,
            tasks: null,
            done: 2647
        }, {
            period: '2010 Q2',
            allocated: 2778,
            tasks: 2294,
            done: 2441
        }, {
            period: '2010 Q3',
            allocated: 4912,
            tasks: 1969,
            done: 2501
        }, {
            period: '2010 Q4',
            allocated: 3767,
            tasks: 3597,
            done: 5689
        }, {
            period: '2011 Q1',
            allocated: 6810,
            tasks: 1914,
            done: 2293
        }, {
            period: '2011 Q2',
            allocated: 5670,
            tasks: 4293,
            done: 1881
        }, {
            period: '2011 Q3',
            allocated: 4820,
            tasks: 3795,
            done: 1588
        }, {
            period: '2011 Q4',
            allocated: 15073,
            tasks: 5967,
            done: 5175
        }, {
            period: '2012 Q1',
            allocated: 10687,
            tasks: 4460,
            done: 2028
        }, {
            period: '2012 Q2',
            allocated: 8432,
            tasks: 5713,
            done: 1791
        }],
        xkey: 'period',
        ykeys: ['allocated', 'tasks', 'done'],
        labels: ['allocated', 'tasks', 'done'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "In progress",
            value: 12
        }, {
            label: "Recertified",
            value: 30
        }, {
            label: "Not recertified",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
