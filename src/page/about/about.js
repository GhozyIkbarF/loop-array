import React from 'react'

export default function about() {
  return (
    <about id='about' style={{
        textAlign: 'center',
        with: '100%',
        padding: '20px 0 80px',
    }}>
        <h1 style={{fontSize: '50px'}}>About</h1>
        <p style={{fontSize: '24px'}}>
            {[...new Array(3)]
            .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                .join('\n')}
        </p>
    </about>
  )
}
