import {
    animation, animate, trigger, animateChild, group, transition, style, query, state
} from '@angular/animations';

export const genericAnimations = [
    trigger('fadeInOut', [
        transition('void => *', [
            style({opacity: 0}), // style only for transition after transition it remove
            animate(1000, style({ opacity: 1 }))
        ]),
        transition('* => void', [
            animate(600, style ({ opacity: 0 }))
        ])
    ])
]